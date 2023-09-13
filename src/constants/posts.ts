import { Category } from '../enums/category.enum';
import { Platform } from '../enums/platform.enum';
export default [
  {
    year: 2022,
    contents: [
      { 
        category: Category.BLOG,
        title: 'Docker setup on AWS with NestJS in 5 minutes',
        platform: Platform.MEDIUM,
        date: 'Dec 23, 2022',
        image: new URL('../assets/posts/2022/docker_setup_on_aws_with_nestjs_in_5_minutes.webp', import.meta.url).href,
        link: 'https://nerdrun.medium.com/docker-setup-on-aws-with-nestjsin-5-minutes-f5f2447d17b4',
      },
      { 
        category: Category.BLOG,
        title: 'How to set up a DHCP server in ubuntu 18.04, 20.04, 22.04',
        platform: Platform.MEDIUM,
        date: 'Oct 18, 2022',
        image: new URL('../assets/posts/2022/how-to-set-up-a-dhcp_server_in_ubuntu_18_04_20_04_22_04.webp', import.meta.url).href,
        link: 'https://nerdrun.medium.com/how-to-set-up-a-dhcp-server-in-ubuntu-18-04-20-04-22-04-1b0442953795',
      },
    ]
  },
]