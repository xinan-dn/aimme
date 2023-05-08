package com.xinan.aimme.mapper;

import com.xinan.aimme.entity.AmUser;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface AmUserMapper{
    List<AmUser> getList();
}
