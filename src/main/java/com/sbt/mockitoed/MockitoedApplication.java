package com.sbt.mockitoed;

import com.sbt.mockitoed.verticles.ServerVerticle;
import io.vertx.core.Vertx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class MockitoedApplication {


	private final ServerVerticle serverVerticle;

	@Autowired
	public MockitoedApplication(ServerVerticle serverVerticle) {
		this.serverVerticle = serverVerticle;
	}

	@PostConstruct
	private void initVerticles(){
		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle(serverVerticle);
	}


	public static void main(String[] args) {
		SpringApplication.run(MockitoedApplication.class, args);
	}
}
