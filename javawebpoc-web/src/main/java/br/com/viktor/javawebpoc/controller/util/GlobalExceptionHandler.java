package br.com.viktor.javawebpoc.controller.util;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.viktor.javawebpoc.exception.JavaWebPoCException;
import br.com.viktor.javawebpoc.exception.alreadyExists.AlreadyExistsException;
import br.com.viktor.javawebpoc.exception.invalidArgument.InvalidArgumentException;
import br.com.viktor.javawebpoc.exception.notFound.NotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@Autowired
	private MessageSource messageSource;
	
	@ExceptionHandler(value = NotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	@ResponseBody
	public ErrorResponse entityNotExistExceptionHandler(NotFoundException ex, Locale locale) {
		ErrorResponse response = ex.getMessage(messageSource, locale);
		return response;
	}

	@ExceptionHandler(value = InvalidArgumentException.class)
	@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY)
	@ResponseBody
	public ErrorResponse invalidArgumentExceptionHandler(InvalidArgumentException ex, Locale locale) {
		ErrorResponse response = ex.getMessage(messageSource, locale);
		return response;
	}

	@ExceptionHandler(value = AlreadyExistsException.class)
	@ResponseStatus(value = HttpStatus.CONFLICT) 
	@ResponseBody
	public ErrorResponse entityExistExceptionHandler(AlreadyExistsException ex, Locale locale) {
		ErrorResponse response = ex.getMessage(messageSource, locale);
		return response;
	}
	
	@ExceptionHandler(JavaWebPoCException.class)
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ResponseBody
	public ErrorResponse generalExceptionHandler(JavaWebPoCException ex, Locale locale) {
		ErrorResponse response = ex.getMessage(messageSource, locale);
		return response;
	}
		
}