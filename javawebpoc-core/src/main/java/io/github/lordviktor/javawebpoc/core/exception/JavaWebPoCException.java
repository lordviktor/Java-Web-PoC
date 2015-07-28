package io.github.lordviktor.javawebpoc.core.exception;

import io.github.lordviktor.javawebpoc.core.l10n.MessageKey;

import java.util.Locale;

import org.springframework.context.MessageSource;

public class JavaWebPoCException extends Exception {
	
	private static final long serialVersionUID = -1427674583844371960L;

	private MessageKey messageKey;
	private Object[] messageArgs;

	public JavaWebPoCException() {
		super();
		this.build(MessageKey.JAVAWEBPOC_EXCEPTION, new Object[] {});
	}

	protected JavaWebPoCException(MessageKey key, Object[] args) {
		super();
		build(key, args);
	}
	
	protected JavaWebPoCException(MessageKey key, Object[] args, Throwable cause) {
		super(cause);
		build(key, args);
	}

	private void build(MessageKey key, Object[] args) {
		this.messageKey = key;
		this.messageArgs = args;
	}

	public ErrorResponse getMessage(MessageSource message, Locale locale) {
		ErrorResponse errorResponse = new ErrorResponse();
		errorResponse.setMessage(message.getMessage(this.messageKey.getMessageKey(),
				this.messageArgs, locale));
		return errorResponse;
	}

	protected MessageKey getMessageKey() {
		return messageKey;
	}

	protected Object[] getMessageArgs() {
		return messageArgs;
	}
	
}
