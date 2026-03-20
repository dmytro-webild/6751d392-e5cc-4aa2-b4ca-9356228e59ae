"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import AboutMetric from "@/components/sections/about/AboutMetric";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Flame, Pizza, Zap, Facebook, Instagram, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Чікерс"
          navItems={[
            { name: "Про нас", id: "about" },
            { name: "Меню", id: "menu" },
            { name: "Переваги", id: "features" },
            { name: "Відгуки", id: "testimonials" }
          ]}
          button={{ text: "Замовити", href: "#cta" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Найсоковитіша шаурма в Івано-Франківську"
          description="Свіжі інгредієнти. Багато начинки. Справжній смак."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Замовити зараз", href: "#menu" },
            { text: "Подзвонити", href: "tel:+380995524166" }
          ]}
          carouselItems={[
            {
              id: "carousel-1",              imageSrc: "http://img.b2bpic.net/free-photo/fried-doner-lavash-with-french-fries_140725-4671.jpg?_wi=1",              imageAlt: "Найсоковитіша шаурма"
            },
            {
              id: "carousel-2",              imageSrc: "http://img.b2bpic.net/free-photo/tortilla-wraps-with-meat-fresh-vegetables_2829-15993.jpg?_wi=1",              imageAlt: "Класична шаурма"
            },
            {
              id: "carousel-3",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-chicken-doner-wrapped-lavash-served-with-lentil-merci-soup-ayran-drink-wooden-board_140725-12783.jpg?_wi=1",              imageAlt: "Сирна шаурма"
            },
            {
              id: "carousel-4",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-holding-tasty-mexican-food_23-2148329068.jpg?_wi=1",              imageAlt: "Гостра шаурма"
            },
            {
              id: "carousel-5",              imageSrc: "http://img.b2bpic.net/free-photo/fried-doner-lavash-with-french-fries_140725-4671.jpg?_wi=2",              imageAlt: "Апетитна шаурма"
            },
            {
              id: "carousel-6",              imageSrc: "http://img.b2bpic.net/free-photo/tortilla-wraps-with-meat-fresh-vegetables_2829-15993.jpg?_wi=2",              imageAlt: "Свіжа шаурма"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Про Чікерс"
          metrics={[
            { icon: Flame, label: "Завжди гаряча", value: "100%" },
            { icon: Pizza, label: "Багато начинки", value: "Щедро" },
            { icon: Zap, label: "Швидке обслуговування", value: "15 хв" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Наше меню"
          description="Виберіть улюблену шаурму з нашого меню. Всі продукти готуються зі свіжих інгредієнтів."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "classic",              name: "Класична шаурма",              price: "170 грн",              imageSrc: "http://img.b2bpic.net/free-photo/tortilla-wraps-with-meat-fresh-vegetables_2829-15993.jpg?_wi=3",              imageAlt: "Класична шаурма"
            },
            {
              id: "cheese",              name: "Шаурма з сиром",              price: "195 грн",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-chicken-doner-wrapped-lavash-served-with-lentil-merci-soup-ayran-drink-wooden-board_140725-12783.jpg?_wi=2",              imageAlt: "Шаурма з сиром"
            },
            {
              id: "assorted",              name: "Асорті",              price: "225 грн",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-holding-tasty-mexican-food_23-2148329068.jpg?_wi=2",              imageAlt: "Асорті"
            }
          ]}
          buttons={[{ text: "Замовити", href: "#cta" }]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSixteen
          title="Чому вибирають Чікерс?"
          description="Ми пропонуємо найкращу якість та швидкість обслуговування для вашого задоволення."
          textboxLayout="default"
          useInvertedBackground={false}
          negativeCard={{
            items: [
              "Вчерасняя шаурма",              "Мала порція",              "Довгий час очікування",              "Низька якість м'яса"
            ]
          }}
          positiveCard={{
            items: [
              "Свіжа на замовлення",              "Щедра порція",              "15-20 хвилин",              "Найкраща якість"
            ]
          }}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Відгуки наших клієнтів"
          description="Слухайте, що кажуть люди про Чікерс"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Марія Петренко",              handle: "@maria_pet",              testimonial: "Дуже смачна шаурма, багато начинки! Це найкраще місце в місті. Рекомендую всім друзям.",              imageSrc: "http://img.b2bpic.net/free-photo/shouting-aggressively-with-angry-expression-with-fists-clenched-celebrating-success_1194-631582.jpg",              imageAlt: "Марія Петренко"
            },
            {
              id: "2",              name: "Іван Коваленко",              handle: "@ivan_kovalenko",              testimonial: "Найкраща в місті! Завжди гаряча, персонал привітний, ціна справедлива.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-smiling_176474-95672.jpg",              imageAlt: "Іван Коваленко"
            },
            {
              id: "3",              name: "Ольга Сидоренко",              handle: "@olga_sydorenko",              testimonial: "Швидко і смачно. Замовляю кожні вихідні. Це стало моєю улюбленою їжею.",              imageSrc: "http://img.b2bpic.net/free-photo/surprised-male-gesturing-while-standing-with-mouth-open-studio_662251-1624.jpg",              imageAlt: "Ольга Сидоренко"
            },
            {
              id: "4",              name: "Дмитро Романов",              handle: "@dmytro_romanov",              testimonial: "Чудовий вибір! Ціни адекватні, якість на висоті. Не шкодую про вибір.",              imageSrc: "http://img.b2bpic.net/free-photo/cute-romantic-woman-posing-sunny-beach-windy-hairs-expression-summer-mood_273443-2620.jpg",              imageAlt: "Дмитро Романов"
            },
            {
              id: "5",              name: "Анна Яворська",              handle: "@anna_yavorska",              testimonial: "Завжди свіжа, смачна і аппетитна. Персонал дуже привітний і уважний.",              imageSrc: "http://img.b2bpic.net/free-photo/vertical-portrait-handsome-masculine-man-sitting-chair-looking-aside-waiting-order_1258-245383.jpg",              imageAlt: "Анна Яворська"
            },
            {
              id: "6",              name: "Артем Кравець",              handle: "@artem_kravets",              testimonial: "Найкраща шаурма, що я коли-небудь їв. Обов'язково приду ще раз!",              imageSrc: "http://img.b2bpic.net/free-photo/young-happy-women-student-property-business-background-beautiful-young-business-woman_1391-64.jpg",              imageAlt: "Артем Кравець"
            }
          ]}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactSplitForm
          title="Голодний? Замовляй зараз!"
          description="Зв'яжіться з нами або замовте через форму нижче."
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          inputs={[
            { name: "name", type: "text", placeholder: "Ваше ім'я" },
            { name: "phone", type: "tel", placeholder: "+380 99 552 4166" }
          ]}
          textarea={{
            name: "message",            placeholder: "Ваше замовлення або запитання",            rows: 4
          }}
          buttonText="Замовити"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Чікерс"
          copyrightText="© 2025 Чікерс | Найсоковитіша шаурма в Івано-Франківську"
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Phone, href: "tel:+380995524166", ariaLabel: "Телефон" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}