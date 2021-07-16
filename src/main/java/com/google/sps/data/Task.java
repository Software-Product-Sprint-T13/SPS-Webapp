package com.google.sps.data;

/** An item on a todo list. */
public final class Task {

  private final long id;
  private final String name;
  private final long timestamp;

  public Task(long id, String name, long timestamp) {
    this.id = id;
    this.name = name;
    this.timestamp = timestamp;
  }
}