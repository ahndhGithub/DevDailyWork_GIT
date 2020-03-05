package com.dailywork.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class CorsFilter
 */
public class CorsFilter implements Filter {

    /**
     * Default constructor. 
     */
    public CorsFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// TODO Auto-generated method stub
		// place your code here
		HttpServletResponse res = (HttpServletResponse) response;
		HttpServletRequest req = (HttpServletRequest) request;
		
		if(req.getRequestURL().substring(7, 11).equals("nerp")) {
			res.addHeader("Access-Control-Allow-Origin", "http://DevDailyWork.com");
		} else {
			res.addHeader("Access-Control-Allow-Origin", "http://DevDailyWork.com");
		}
		
		res.addHeader("Access-Control-Allow-Credentials", "true");
		res.addHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		res.addHeader("Access-Control-Allow-Headers", "cache-control, content-type, expires, if-modified-since, pragma, x-requested-with");
		
		if(req.getMethod().equals("OPTIONS")) {
			res.setStatus(HttpServletResponse.SC_ACCEPTED);
			return;
		}
		
//		HttpServletResponse modifiedResponse = (HttpServletResponse) response;
//		HttpServletRequest modifiedRequest = (HttpServletRequest) request;
		
//		if(modifiedResponse.getStatus() == 404 && "OPTIONS".equals(modifiedRequest.getMethod())) {
//			modifiedResponse.setStatus(200);
//			return;
//			//modifiedResponse.setEntity("");
//			//System.out.print(modifiedResponse.getStatus());
//		} else {
//			// pass the request along the filter chain
		chain.doFilter(req, response);
//		}
		
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
