package com.dailywork.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
	
public class LoggerInterceptor extends HandlerInterceptorAdapter {
	private static final Logger logger = LoggerFactory.getLogger(LoggerInterceptor.class);
	//protected Log logger = LogFactory.getLog(LoggerInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String actionName = "";
        
    	if( handler instanceof HandlerMethod ) {
            // there are cases where this handler isn't an instance of HandlerMethod, so the cast fails.
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            handlerMethod.getBean().getClass().getSimpleName().replace("Controller", "");
            actionName = handlerMethod.getMethod().getName();
            
            logger.info(actionName);            
        }
//        if (logger.isDebugEnabled()) {
//        	logger.debug("======================================          START         ======================================");
//        	logger.debug(" Request URI \t:  " + request.getRequestURI());
//        }
        return super.preHandle(request, response, handler);
    }
     
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
//        if (logger.isDebugEnabled()) {
//        	logger.debug("======================================           END          ======================================\n");
//        }
    }
}
