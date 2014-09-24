package com.tsl.util;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSourceFactory;

public class DBUtil {
	private static DataSource dataSource;
	private static ThreadLocal<Connection> connLocal = new ThreadLocal<Connection>();
	/** 连接信息 */
	static {
		Properties props = new Properties();
		try {
			props.load(DBUtil.class.getClassLoader().getResourceAsStream(
					"dbcp.properties"));
			dataSource = BasicDataSourceFactory.createDataSource(props);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/** 获取连接 */
	public synchronized static Connection getConnetion() throws SQLException {
		Connection conn = connLocal.get();
		if (conn == null) {
			conn = dataSource.getConnection();
			connLocal.set(conn);
		}
		return conn;
	}

	/** 关闭连接 */
	public synchronized static void closeConnection() throws SQLException {
		Connection conn = connLocal.get();
		connLocal.set(null);
		if (conn != null && !conn.isClosed()) {
			conn.close();
		}
	}
}
