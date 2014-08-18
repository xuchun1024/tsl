/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.interceptor;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * TODO 在这里编写类的功能描述
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-18
 */
public class LogInterceptor implements HandlerInterceptor {

    private static final Logger logger = LogManager.getLogger(LogInterceptor.class.getName());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {

        logger.info("HttpServletRequest is {}", request.getRequestURI());
        logger.info("HttpServletResponse is {}", response.toString());
        logger.info("Object is {}", o);

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object o, ModelAndView modelAndView) throws Exception {
        logger.info("HttpServletRequest is {}", request.getRequestURI());
        logger.info("HttpServletResponse is {}", response.toString());
        logger.info("Object is {}", o);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object o, Exception e) throws Exception {
        logger.info("HttpServletRequest is {}", request.getRequestURI());
        logger.info("HttpServletResponse is {}", response.toString());
        logger.info("Object is {}", o);
    }
}