# Example Processors

We maintain a [set of examples](https://github.com/SeaQL/sea-streamer/tree/main/examples) which you can use as a starting point for you to develop your stream processors.

The examples work for both `tokio` and `async-std` and uses the `sea-streamer-socket` API:

+ [`consumer`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/consumer.rs): A basic consumer
+ [`producer`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/producer.rs): A basic producer
+ [`processor`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/processor.rs): A basic stream processor
+ [`resumable`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/resumable.rs): A resumable stream processor that continues from where it left off
+ [`buffered`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/buffered.rs): An advanced stream processor with internal buffering and batch processing
+ [`blocking`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/blocking.rs): An advanced stream processor for handling blocking / CPU-bound tasks

## Running the basic processor example

With Kafka:

```bash
# Produce some input
cargo run --bin producer -- --stream kafka://localhost:9092/hello1 &
# Start the processor, producing some output
cargo run --bin processor -- --input kafka://localhost:9092/hello1 --output kafka://localhost:9092/hello2 &
# Replay the output
cargo run --bin consumer -- --stream kafka://localhost:9092/hello2
# Remember to stop the processes
kill %1 %2
```

With Stdio:

```bash
# Pipe the producer to the processor
cargo run --bin producer -- --stream stdio:///hello1 | \
cargo run --bin processor -- --input stdio:///hello1 --output stdio:///hello2
```

## Running the resumable processor example

The resumable processor can be killed anytime, and will continue from where it left off.
This is typically called "at least once" processing, meaning no messages should be skipped,
but it's possible for the same message to be processed twice.

```bash
# Produce lots of input
cargo run --bin producer -- --stream kafka://localhost:9092/hello1
# Run the processor, but kill it before it can process the entire stream
cargo run --bin resumable -- --input kafka://localhost:9092/hello1 --output stdio:///hello2 | head -n 10
cargo run --bin resumable -- --input kafka://localhost:9092/hello1 --output stdio:///hello2 | head -n 10
cargo run --bin resumable -- --input kafka://localhost:9092/hello1 --output stdio:///hello2 | head -n 10
```

Output:

```log
[2023-02-28T10:13:59 | hello2 | 0] "tick 0" processed
[2023-02-28T10:13:59 | hello2 | 1] "tick 1" processed
[2023-02-28T10:13:59 | hello2 | 2] "tick 2" processed
...
[2023-02-28T10:13:59 | hello2 | 9] "tick 9" processed
thread 'sea-streamer-stdio-stdout' panicked at 'failed printing to stdout: Broken pipe (os error 32)', library/std/src/io/stdio.rs:1009:9

[2023-02-28T10:14:08 | hello2 | 0] "tick 10" processed
...
[2023-02-28T10:14:08 | hello2 | 9] "tick 19" processed
thread 'sea-streamer-stdio-stdout' panicked at 'failed printing to stdout: Broken pipe (os error 32)', library/std/src/io/stdio.rs:1009:9

...
```

## Running the buffered processor example

The clock runs 10x faster than the processor, so we expect each batch consist of more or less 10 messages.

```bash
alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'
clock -- --stream clock --interval 100ms | \
cargo run --bin buffered -- --input stdio:///clock --output stdio:///output
```

Output:

```log
[2023-02-27T10:43:58 | output | 0] [batch 0] { "tick": 0 } processed
[2023-02-27T10:43:59 | output | 1] [batch 1] { "tick": 1 } processed
[2023-02-27T10:43:59 | output | 2] [batch 1] { "tick": 2 } processed
[2023-02-27T10:43:59 | output | 3] [batch 1] { "tick": 3 } processed
[2023-02-27T10:43:59 | output | 4] [batch 1] { "tick": 4 } processed
[2023-02-27T10:43:59 | output | 5] [batch 1] { "tick": 5 } processed
[2023-02-27T10:43:59 | output | 6] [batch 1] { "tick": 6 } processed
[2023-02-27T10:43:59 | output | 7] [batch 1] { "tick": 7 } processed
[2023-02-27T10:43:59 | output | 8] [batch 1] { "tick": 8 } processed
...
```

## Running the blocking processor example

The clock runs 3x faster than the processor, but we have 4 threads, so we expect it to be able to catch up in real-time. Tasks are randomly assigned to threads, aka. a "fan out" pattern.

This pattern is useful when you have to perform blocking IO or CPU-heavy computation.

```bash
alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'
clock -- --stream clock --interval 333ms | \
cargo run --bin blocking -- --input stdio:///clock --output stdio:///output
```

Output:

```log
[2023-03-07T06:00:52 | output | 0] [thread 0] { "tick": 0 } processed
[2023-03-07T06:00:53 | output | 1] [thread 1] { "tick": 1 } processed
[2023-03-07T06:00:53 | output | 2] [thread 2] { "tick": 2 } processed
[2023-03-07T06:00:53 | output | 3] [thread 3] { "tick": 3 } processed
[2023-03-07T06:00:54 | output | 4] [thread 0] { "tick": 4 } processed
[2023-03-07T06:00:54 | output | 5] [thread 1] { "tick": 5 } processed
[2023-03-07T06:00:54 | output | 6] [thread 2] { "tick": 6 } processed
```