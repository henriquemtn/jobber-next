// * Icons
import {
  CalendarCheck2,
  ChartLine,
  Clock,
  Heart,
  Home,
  Info,
  LucideIcon,
  MessageSquareText,
  Package,
  Pin,
  SquarePlus,
  Star,
  TabletSmartphone,
  User,
  Users,
  Wallet
} from "lucide-react"

type Submenu = {
  url: string;
  title: string;
  icon: LucideIcon;
  active?: boolean;
};

type Menu = {
  url: string;
  title: string;
  icon: LucideIcon;
  active?: boolean;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

// Menu items
export const getMenuList = (pathname: string): Group[] => {
  return [
    {
      groupLabel: "",
      menus: [
        {
          title: "Dashboard",
          url: "/dev",
          icon: Home,
        },
        {
          title: "Grupos",
          url: "/groups",
          icon: Users,
        },
        {
          title: "Usuários",
          url: "/users",
          icon: User,
        },
        {
          title: "Eventos",
          url: "/events",
          icon: Pin,
        },
        {
          title: "Clientes",
          url: "/customers",
          icon: Heart,
        },
        {
          title: "Projetos",
          url: "/projects",
          icon: Star,
        },
        {
          title: "Pacotes",
          url: "/packages",
          icon: Package,
        },
        {
          title: "Carteiras de Pacotes",
          url: "/walletpackages",
          icon: Wallet,
        },
        {
          title: "Bônus",
          url: "/bonus",
          icon: SquarePlus,
        },
        {
          title: "Status",
          url: "/status",
          icon: Info,
        },
        {
          title: "Solicitações",
          url: "",
          icon: MessageSquareText,
          submenus: [
            { title: "Todas", url: "/requests/all", icon: MessageSquareText },
            { title: "Por pacotes", url: "/requests/package", icon: MessageSquareText },
            { title: "Por projetos", url: "/requests/project", icon: MessageSquareText }
          ]
        },
        {
          title: "Jobs",
          url: "",
          icon: Clock,
          submenus: [
            { title: "Listar", url: "/jobs", icon: Clock },
            { title: "Importar", url: "/jobs/import", icon: Clock },
          ]
        },
        {
          title: "Pauta",
          url: "",
          icon: CalendarCheck2,
          submenus: [
            { title: "Pauta de produção", url: "/schedules/production", icon: CalendarCheck2 },
            { title: "Pauta de entrega", url: "/schedules/deadline", icon: CalendarCheck2 },
          ]
        },
        {
          title: "Relatórios",
          url: "",
          icon: ChartLine,
          submenus: [
            { title: "Customizados", url: "/dev", icon: ChartLine },
            { title: "Apontamentos", url: "/reports/note", icon: ChartLine },
            { title: "Clientes", url: "/reports/customer", icon: ChartLine },
            { title: "Jobs", url: "/reports/job", icon: ChartLine },
            { title: "Pacotes", url: "/reports/package", icon: ChartLine },
          ]
        },
        {
          title: "App",
          url: "",
          icon: TabletSmartphone,
          submenus: [
            { title: "Apps", url: "/apps", icon: TabletSmartphone },
            { title: "FAQS", url: "/faqs", icon: TabletSmartphone },
            { title: "Postagens", url: "/posts", icon: TabletSmartphone },
            { title: "Serviços", url: "/services", icon: TabletSmartphone },
          ]
        },
      ]
    }
  ]
} 