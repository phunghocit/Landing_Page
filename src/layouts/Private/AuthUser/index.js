import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { Role, User, UserInfo, Username } from './styles';

const AuthUser = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate(`/ReactGreen/`)
    }


    const items = [
        {
          label: (
              <div>
                <a onClick={logout}>
                    Log out
                </a>
              </div>
          ),
          key: '0',
        }
      ];


    return(
        <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
            <UserInfo>
              <img src="https://haycafe.vn/wp-content/uploads/2022/12/hinh-anh-avatar-dep-nam-ngau-chat.jpg"/>
              <div>
                <Role>Admin</Role>
                <Username>Phùng Học</Username>
              </div>
            </UserInfo>
        </a>
      </Dropdown>
    );
}

export default AuthUser;