/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.task;

import com.tosla.service.UserService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Date;

/**
 * TODO 在这里编写类的功能描述
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-14
 */
@Component
public class DemoTask {

    @Resource
    private UserService userService;

    @Scheduled(fixedRate = 3000)
    void doSomethingWithRate() {
        userService.printName();
        System.out.println("I'm doing with rate now!" + (new Date()));
    }

    @Scheduled(cron = "0/5 * * * * *")
    void doSomethingWith() {
        System.out.println("I'm doing with cron now!" + (new Date()));
    }
}