/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.controller;

import com.tosla.domain.User;
import com.tosla.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * TODO 在这里编写类的功能描述
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-12
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;

    private Map<Integer,User> userMap;



    @RequestMapping(value = "/all",method = RequestMethod.GET)
    @ResponseBody
    public Object getAllUsers(HttpServletResponse response) {

        response.setHeader("Access-Control-Allow-Origin","*");
        List<User> userList = new ArrayList<User>();
        User user1 = new User();
        user1.setId(1);
        user1.setAddTime(new Date());
        user1.setName("拉风少年");
        user1.setPassword("123456");

        User user2 = new User();
        user2.setId(2);
        user2.setAddTime(new Date());
        user2.setName("千字");
        user2.setPassword("123456");

        userList.add(user1);
        userList.add(user2);
        userService.printName();
        return userList;
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    @ResponseBody
    public Object getUser(@PathVariable Integer id, HttpServletResponse response) {

        response.setHeader("Access-Control-Allow-Origin","*");

        List<User> userList = new ArrayList<User>();
        User user1 = new User();
        user1.setId(1);
        user1.setAddTime(new Date());
        user1.setName("拉风少年");
        user1.setPassword("123456");

        User user2 = new User();
        user2.setId(2);
        user2.setAddTime(new Date());
        user2.setName("千字");
        user2.setPassword("123456");

        userList.add(user1);
        userList.add(user2);
        userService.printName();

        userMap = new HashMap<Integer, User>();
        userMap.put(user1.getId(), user1);
        userMap.put(user2.getId(), user2);

        return userMap.get(id);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST,consumes= MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Object saveUser(@RequestBody User user, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        System.out.println(user.getName());
        userMap = new HashMap<Integer, User>();
        userMap.put(user.getId(), user);
        return userMap.get(user.getId());
    }


}