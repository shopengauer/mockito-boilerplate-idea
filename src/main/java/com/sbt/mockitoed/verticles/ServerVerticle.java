package com.sbt.mockitoed.verticles;

import io.vertx.core.AbstractVerticle;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.templ.ThymeleafTemplateEngine;
import org.springframework.stereotype.Component;

/**
 * Created by vasiliy on 24.12.16.
 */
@Component
public class ServerVerticle extends AbstractVerticle{

    @Override
    public void start() throws Exception {
        super.start();
        // To simplify the development of the web components we use a Router to route all HTTP requests
        // to organize our code in a reusable way.
        final Router router = Router.router(vertx);

        // In order to use a Thymeleaf template we first need to create an engine
         final ThymeleafTemplateEngine engine = ThymeleafTemplateEngine.create();

        // Entry point to the application, this will render a custom JADE template.

        router.route().path("/").handler(StaticHandler.create());

        router.get("/th").handler(ctx -> {
            // we define a hardcoded title for our application
            ctx.put("key", "Hi there!");

            // and now delegate to the engine to render it.
            engine.render(ctx, "templates/index.html", res -> {
                if (res.succeeded()) {
                    ctx.response().end(res.result());
                } else {
                    ctx.fail(res.cause());
                }
            });
        });

        // start a HTTP web server on port 8080
        vertx.createHttpServer().requestHandler(router::accept).listen(8081);
    }

    @Override
    public void stop() throws Exception {
        super.stop();
    }
}
