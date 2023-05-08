package com.xinan.aimme.controller;

import com.xinan.aimme.service.AmUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class AmUserController {

    @Resource
    private AmUserService amUserService;

    /**
     * demo
     */
    @GetMapping("/demo")
    public void demo(HttpServletResponse response, HttpServletRequest request)
    {

    }
}
