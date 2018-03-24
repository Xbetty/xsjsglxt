
package com.xsjsglxt.dao.impl.Team;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.xsjsglxt.dao.Team.StaffDao;
import com.xsjsglxt.domain.DO.xsjsglxt_staff;
import com.xsjsglxt.domain.DTO.Team.policemanListDTO;
import com.xsjsglxt.domain.VO.Team.policemanListVO;

public class StaffDaoImpl implements StaffDao {
	private SessionFactory sessionFactory;
	private final static String DELETE = "deleteSuccess";
	private final static String UPDATE = "updateSuccess";

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {

		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public String savePoliceman(xsjsglxt_staff policeman) {
		// TODO Auto-generated method stub
		Session session = this.getSession();
		session.save(policeman);
		return "saveSuccess";
	}

	@Override
	public String deletePoliceman(xsjsglxt_staff policeman) {
		// TODO Auto-generated method stub
		Session session = this.getSession();
		session.delete(policeman);
		return DELETE;
	}

	@Override
	public xsjsglxt_staff getPolicemanByStaffId(String xsjsglxt_staff_id) {
		// TODO Auto-generated method stub
		Session session = this.getSession();
		return (xsjsglxt_staff) session.get(xsjsglxt_staff.class, xsjsglxt_staff_id);
	}

	@Override
	public String updatePoliceman(xsjsglxt_staff policeman) {
		// TODO Auto-generated method stub
		Session session = this.getSession();
		session.saveOrUpdate(policeman);
		return UPDATE;
	}
	// new
	//

	@Override
	public int getPolicemanCount(policemanListVO policemanVO) {
		// TODO Auto-generated method stub
		String hql = "select count(*) from xsjsglxt_staff where 1=1";
		if (policemanVO.getPolicemanName() != null && policemanVO.getPolicemanName().trim().length() > 0) {
			String name = "%" + policemanVO.getPolicemanName() + "%";
			hql = hql + " and xsjsglxt_name like '" + name + "'";
		}
		if (policemanVO.getPolicemanSex() != null && policemanVO.getPolicemanSex().trim().length() > 0) {
			hql = hql + " and xsjsglxt_sex='" + policemanVO.getPolicemanSex() + "'";
		}
		if (policemanVO.getPoliticalStatus() != null && policemanVO.getPoliticalStatus().trim().length() > 0) {
			hql = hql + " and staff_politicalStatus='" + policemanVO.getPoliticalStatus() + "'";
		}
		hql = hql + "order by staff_thePoliceTime " + policemanVO.getInPoliceTimeSort();
		Session session = this.getSession();
		long count;
		count = (long) session.createQuery(hql).uniqueResult();
		return (int) count;
	}

	@Override
	public List<policemanListDTO> getPolicemansByPage(policemanListVO policemanVO) {
		// TODO Auto-generated method stub
		String hql = "select new com.xsjsglxt.domain.DTO.Team.policemanListDTO(x.xsjsglxt_staff_id as xsjsglxt_staff_id,x.xsjsglxt_name as xsjsglxt_name,"
				+ "x.xsjsglxt_sex as xsjsglxt_sex,x.xsjsglxt_age as xsjsglxt_age,x.staff_politicalStatus as staff_politicalStatus,x.staff_thePoliceTime as staff_thePoliceTime) from xsjsglxt_staff x where 1=1 ";
		if (policemanVO.getPolicemanName() != null && policemanVO.getPolicemanName().trim().length() > 0) {
			String name = "%" + policemanVO.getPolicemanName() + "%";
			hql = hql + " and xsjsglxt_name like '" + name + "'";
		}
		if (policemanVO.getPolicemanSex() != null && policemanVO.getPolicemanSex().trim().length() > 0) {
			hql = hql + " and xsjsglxt_sex='" + policemanVO.getPolicemanSex() + "'";
		}
		if (policemanVO.getPoliticalStatus() != null && policemanVO.getPoliticalStatus().trim().length() > 0) {
			hql = hql + " and staff_politicalStatus='" + policemanVO.getPoliticalStatus() + "'";
		}
		hql = hql + "order by staff_thePoliceTime " + policemanVO.getInPoliceTimeSort();
		Session session = this.getSession();
		List<policemanListDTO> policemans = session.createQuery(hql)
				.setFirstResult((policemanVO.getCurrPage() - 1) * policemanVO.getPageCount())
				.setMaxResults(policemanVO.getPageCount()).list();
		session.clear();
		for (policemanListDTO policemanListDTO : policemans) {
			if (policemanListDTO.getXsjsglxt_name() != null
					&& policemanListDTO.getXsjsglxt_name().trim().length() > 0) {
				policemanListDTO
						.setXsjsglxt_name(policemanListDTO.getXsjsglxt_name().replaceAll(policemanVO.getPolicemanName(),
								"<span style='color:red;'>" + policemanVO.getPolicemanName() + "</span>"));
			}
		}
		return policemans;
	}

}
