package com.xinan.aimme.controller;

import com.xinan.aimme.entity.AmUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class WorkbenchController {

    @GetMapping("/workbench")
    public String index(Model model)
    {
        return "workbench";
    }
}
