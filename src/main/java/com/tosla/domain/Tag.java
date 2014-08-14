/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.domain;

/**
 * TODO 在这里编写类的功能描述
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-14
 */
public class Tag {
    Integer id;
    String Name;
    String add_user_id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getAdd_user_id() {
        return add_user_id;
    }

    public void setAdd_user_id(String add_user_id) {
        this.add_user_id = add_user_id;
    }
}