/*
 * Copyright (c) 2010-2013 meituan.com
 * All rights reserved.
 * 
 */
package com.tosla.dao;

import org.springframework.data.repository.Repository;

import java.io.Serializable;

/**
 * TODO 在这里编写类的功能描述
 *
 * @author yuexiaojun
 * @version 1.0
 * @created 2014-08-14
 */
public interface CrudRepository<T, ID extends Serializable>
        extends Repository<T, ID> {
    <S extends T> S save(S entity);

    T findOne(ID primaryKey);

    Iterable<T> findAll();

    Long count();

    void delete(T entity);

    boolean exists(ID primaryKey);
    // … more functionality omitted.
}