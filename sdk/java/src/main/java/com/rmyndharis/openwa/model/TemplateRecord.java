package com.rmyndharis.openwa.model;

/** A stored message template with {@code {{variable}}} placeholders. Optional fields are {@code null} when absent. */
public record TemplateRecord(
    String id,
    String sessionId,
    String name,
    /** Template body with {@code {{variable}}} placeholders. */
    String body,
    String header,
    String footer,
    TemplateType type,
    String mediaUrl,
    String createdAt,
    String updatedAt) {}
