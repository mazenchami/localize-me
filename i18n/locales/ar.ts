import { Translations } from "./en";

const ar: Translations = {
  common: {},
  showcaseScreen: {
    title: "معرض",
    placeholder: "اكتب هنا",
  },
  exploreTab: {
    title: "يستكشف",
    subtitle: "يتضمن هذا التطبيق كودًا نموذجيًا لمساعدتك على البدء.",
    learnMore: "يتعلم أكثر",
    fileBasedRouting: {
      title: "التوجيه القائم على الملف",
      description1:
        "هذا التطبيق يحتوي على شاشتين: <semiBold>app/(tabs)/index.tsx</semiBold> و <semiBold>app/(tabs)/explore.tsx</semiBold>",
      description2:
        "ملف التخطيط في <semiBold>app/(tabs)/_layout.tsx</semiBold> يحدد مستعرض علامات التبويب.",
    },
    androidIosWeb: {
      title: "Android, iOS, ودعم الوب.",
      description:
        "يمكنك فتح هذاالمشروع على Android, iOs,والموقع. لفتح نسخة الموقع اضغط § <semiBold>w</semiBold> في المحطة التي تقوم بتشغيل هذا المشروع.",
    },
    images: {
      title: "صور",
      description:
        "بالنسبة للصور الثابتة، يمكنك استخدام <semiBold>@2x</semiBold> و <semiBold>@3x</semiBold> لاحقات لتوفير ملفات لكثافة الشاشة المختلفة.",
    },
    customFonts: {
      title: "الخطوط المخصصة",
      description:
        "افتح <semiBold>app/_layout.tsx</semiBold> لمعرفة كيفية تحميل <spaceMono>الخطوط المخصصة مثل هذا الخط</spaceMono>.",
    },
    lightDarkMode: {
      title: "المكونات الفاتحة والداكنة",
      description:
        "يدعم هذا القالب الوضع الفاتح والداكن. <semiBold>useColorScheme()</semiBold> يتيح لك الخطاف فحص مخطط الألوان الحالي للمستخدم، وبالتالي يمكنك ضبط ألوان واجهة المستخدم وفقاً لذلك.",
    },
    animations: {
      title: "رسوم متحركة",
      description1:
        "يتضمن هذا القالب مثالاً لمكون متحرك.  <semiBold>components/HelloWave.tsx</semiBold> يستخدم المكون المكتبة القوية <semiBold>react-native-reanimated</semiBold> لإنشاء رسوم متحركة لليد المتلوية.",
      description2:
        " <semiBold>components/ParallaxScrollView.tsx</semiBold> يوفر المكون تأثير المنظر البعيد لصورة الرأس.",
    },
  },
  homeTab: {
    title: "منزل",
    welcome: "مرحباً",
    step1: {
      title: "خطوة أولى: حاول",
      description:
        "قم بتعديل <semiBold>app/(tabs)/index.tsx</semiBold> لرؤية التغييرات. اضغط على <semiBold>{{shortcut}}</semiBold> لفتح أدوات المطور.",
    },
    step2: {
      title: "خطوة ثانية: استكشاف",
      description:
        "اضغط على علامة التبويب 'استكشاف' لمعرفة المزيد حول ما هو مدرج في هذا التطبيق المبدئي.",
    },
    step3: {
      title: "الخطوة ٣: الحصول على بداية جديدة",
      description:
        " عندما تكون مستعداً، قم بتشغيل <semiBold>yarn reset-project</semiBold> للحصول على دليل <semiBold>app</semiBold> جديد. سيؤدي هذا الى نقل <semiBold>app/semiBold> الى <semiBold>app-example</<semiBold.",
    },
  },
  notFound: {
    title: "هذه الشاشة غير موجودة.",
    link: "انتقل الى الشاشة الرئيسية!",
  },
};

export default ar;
