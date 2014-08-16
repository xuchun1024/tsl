/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla;

/**
 * TODO 在这里编写类的功能描述
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-15
 */

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * 调整JVM参数使运行时间达到最优，约束条件只有堆内存最大不能超过100M
 *
 * base: -Xmx100M
 *
 */
public class JvmParTest {

    private Map<Integer, byte[]> map = new HashMap<Integer, byte[]>();

    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        JvmParTest t = new JvmParTest();
        for (int i = 1; i < 10000; i++) {
            t.methodA();
            t.methodB();
            t.methodC();
        }

        long end = System.currentTimeMillis();
        System.out.println(end - start);
    }

    public void methodA() {
        System.gc();
        Random r = new Random();
        byte[] bytes = new byte[r.nextInt(1000 * 1000 * 3)];
    }

    public void methodB() {
        System.gc();
        String base = "abcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        for (int n = 0; n < 1000; n++) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < 5; i++) {
                int number = random.nextInt(base.length());
                sb.append(base.charAt(number));
            }
            sb.toString().intern();
        }
    }

    public void methodC() {
        System.gc();
        Random r = new Random();
        int i = r.nextInt(10);
        if (!this.map.keySet().contains(i)) {
            byte[] bytes = new byte[1024 * 1024 * 3];
            this.map.put(i, bytes);
        }
    }
}