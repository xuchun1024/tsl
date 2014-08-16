/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import java.util.Date;

/**
 * 用户实体
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-11
 */
@Document(collection = "users")
public class User {
    @Id
    private Integer id;
    private String name;
    private String email;
    private String mobile;
    private String password;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date addTime;
    private Integer status;

    public String toString() {
        return "User[id=" + id + ",name=" + name + ",email=" + email + ",mobile=" + mobile + ",password=" + password + ",addTime=" + addTime + ",status=" + status + "]";
    }

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
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

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }


}