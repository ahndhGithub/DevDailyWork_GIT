package com.dailywork.interceptor;

import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.filter.Filter;
import ch.qos.logback.core.spi.FilterReply;
 
public class LoggingFilter extends Filter<ILoggingEvent> {
    @Override
    public FilterReply decide(ILoggingEvent event) {
    	if(event.getMessage().toString().contains("startup")) {
			return FilterReply.NEUTRAL;
		} else if(String.valueOf(event.getLevel()).equals("INFO") && !event.getMessage().toString().contains("SQL:")) {
			return FilterReply.DENY;
		}
		
    	return FilterReply.NEUTRAL;
    }
}
