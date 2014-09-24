package com.tsl.util;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import sun.misc.BASE64Encoder;

public class DegistUtil {
	/**
	 * produce encryption code
	 * @param seq
	 * @return
	 */
	public static String produceDegistCode(String seq) {
		try {
			MessageDigest md5Code = MessageDigest.getInstance("MD5");
			byte[] bTmp = md5Code.digest(seq.getBytes());
			BASE64Encoder base64=new BASE64Encoder();
			seq=base64.encode(bTmp);
			System.out.println("应该是加密的="+seq);
			return seq;
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
	}
	
}