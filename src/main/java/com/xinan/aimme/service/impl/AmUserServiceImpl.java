package com.xinan.aimme.service.impl;

import com.xinan.aimme.entity.AmUser;
import com.xinan.aimme.mapper.AmUserMapper;
import com.xinan.aimme.service.AmUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AmUserServiceImpl implements AmUserService {

    @Resource
    private AmUserMapper amUserMapper;

    @Override
    public List<AmUser> getList() {
        return amUserMapper.getList();
    }
}
