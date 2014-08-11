/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.domain;

import java.util.Date;

/**
 * 任务实体
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-11
 */
public class Task {
    Integer id;
    String title;
    String content;
    Date deadline;
    Integer ownerId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }
}