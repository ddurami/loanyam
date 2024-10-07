export interface PageItem {
  href: string;
  label: string;
  description: string;
  group: string;
}

export interface PageGroup {
  group: string;
  label: string;
  items: PageItem[];
}

export const pages: PageGroup[] = [
  {
    group: 'todos',
    label: '숙제 관리',
    items: [
      {
        href: '/todo',
        label: '개인 숙제',
        description: '일일 숙제 및 주간 레이드 관리',
        group: 'todos',
      },
      {
        href: '/raid',
        label: '공대 관리',
        description: '공대원들의 주간 레이드 관리',
        group: 'todos',
      },
    ],
  },
  {
    group: 'tools',
    label: '기타 도구',
    items: [
      {
        href: '/character',
        label: '캐릭 정보',
        description: '캐릭터의 상세 정보 확인',
        group: 'tools',
      },
      {
        href: '/fragment',
        label: '편린 통계',
        description: '운명의 편린 획득 비율 통계',
        group: 'tools',
      },
      {
        href: '/cube',
        label: '큐브 계산',
        description: '에브니 큐브 보상 확인',
        group: 'tools',
      },
      {
        href: '/ship',
        label: '선박 시뮬',
        description: '선박 내성 시뮬레이터',
        group: 'tools',
      },
    ],
  },
];

export const allPages = pages.flatMap((group) => group.items);
