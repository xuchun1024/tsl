/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.domain;

import java.util.Date;

/**
 * 用户实体
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-11
 */
public class User {
    Integer id;
    String name;
    String password;
    Date addTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getAddTime() {
        return addTime;
    }

    public void setAddTime(Date addTime) {
        this.addTime = addTime;
    }
}