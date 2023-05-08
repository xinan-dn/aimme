package com.xinan.aimme.controller;

import com.xinan.aimme.entity.AmUser;
import com.xinan.aimme.service.AmUserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class IndexController {

    @Resource
    private AmUserService amUserService;

    @GetMapping("/")
    public String index(Model model)
    {
        List<AmUser> list = amUserService.getList();
        model.addAttribute("user", list);
        return "index";
    }

    @GetMapping("/admin")
    public String admin(Model model)
    {
        List<AmUser> list = amUserService.getList();
        model.addAttribute("user", list);
        return "admin";
    }
}
