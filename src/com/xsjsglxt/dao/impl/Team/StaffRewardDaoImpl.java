package com.xsjsglxt.dao.impl.Team;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.xsjsglxt.dao.Team.StaffRewardDao;

public class StaffRewardDaoImpl implements StaffRewardDao {
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {

		return this.sessionFactory.getCurrentSession();
	}

}