package com.xinan.aimme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class AimmeApplication {

    public static void main(String[] args) {
        SpringApplication.run(AimmeApplication.class, args);
    }

}
