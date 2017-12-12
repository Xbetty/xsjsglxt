package com.xsjsglxt.action.InspectionIdentification;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

public class ImgAction {
	private String imgName;
	private InputStream inputStream;

	// 获取尸体检验记录中的表
	public String getDeathPicture() {
		/*
		 * 获取路径
		 */
		String lj = "";
		try {
			Properties props = new Properties();
			props.load(this.getClass().getClassLoader().getResourceAsStream("file.properties"));
			lj = props.getProperty("lj");
		} catch (Exception e) {
			System.out.println("获取初始路径失败");
			e.printStackTrace();
		}
		String path = "";
		if (imgName.equals("") || imgName == null) {
			path = "/xsjsglxt/img/default.png";
		} else {
			path = lj + "xsjsglxt/" + imgName;
		}
		File file = new File(path);
		try {
			inputStream = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			file = new File("/xsjsglxt/img/notfound.png");
			try {
				inputStream = new FileInputStream(file);
			} catch (FileNotFoundException e1) {
				System.out.println("cuo");
				e1.printStackTrace();
			}
		}
		return "getImg";
	}

	public String getImgName() {
		return imgName;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setImgName(String imgName) {
		this.imgName = imgName;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}
}
