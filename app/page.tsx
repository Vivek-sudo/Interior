import Link from "next/link";
import { marketingConfig } from "config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import IndexPage from "@/components/home-page";
import Aboutus from "@/components/about-us";
import { Metadata } from "next";
import { Projects } from "@/components/projects";
import Client from "@/components/client";
import Questions from "@/components/still-questions";
import Head from "next/head";
import SiteFooter from "@/components/site-footer";
import Script from "next/script";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vivekdoshi.com/"),
  title: "Nishtha - Best Architects in Vadodara | Top Architectural Firm",
  description:
    "Welcome to Nishtha Architects, where dreams take shape and sustainable futures are built in the vibrant city of Vadodara. As a leading architecture firm, we specialize in turning your visionary dreams into tangible realities, crafting spaces that seamlessly blend innovation, aesthetics, and sustainability.",
  keywords: [
    "best architects in Vadodara",
    "architecture",
    "architects",
    "Vadodara",
    "best architects",
    "how to find architect",
    "architects in Vadodara",
    "Gujarat",
    "top architects",
    "residential architecture",
    "apartment design",
    "villa design",
    "restaurant architecture",
    "interior design architects near me",
    "architects near me",
    "cheap price architects",
    "famous architects",
    "interior designs",
    "Architect in Vadodara",
    "Interior designer in Vadodara",
    "Top architects in Vadodara",
    "Best architects in Vadodara",
    "Home design in Vadodara",
    "Shop design in Vadodara",
    "Showroom designer in Vadodara",
    "Affordable residential architects",
    "Modern house designs",
    "Experienced home planners",
    "Budget-friendly interior designers",
    "Local architects for homes",
    "Creative space planners",
    "Vadodara's top-rated home architects",
    "Innovative interior decor solutions",
    "Custom home design services",
    "Commercial space designers",
    "Vadodara interior specialists",
    "Best local architects",
    "Residential and commercial design experts",
    "Quality home blueprints",
    "Unique showroom designs",
    "Top-notch home and shop designers",
    "Vadodara architectural excellence",
    "Tailored design for shops and homes",
    "Reliable home and business designers",
  ],
  applicationName: "Nishtha Architects",
  robots: "index, follow",
  alternates: { canonical: "https://www.vivekdoshi.com/" },
  category:
    "Architecture,best architects, architectural firm, Interior Design, Construction, Building Design, Architectural Design, Interior Designers, Architects, Interior Designers, Interior Decorators, Interior Decorators For Residence, Interior Decorators For Office, Interior Decorators For Showroom, Interior Decorators For Restaurant, Interior Decorators For Hotel, Interior Decorators For Hospital, Interior Decorators For School, Interior Decorators For College, Interior Decorators For University, Interior Decorators For Institute, Interior Decorators For Factory, Interior Decorators For Warehouse, Interior Decorators For Godown, Interior Decorators For Shop, Interior Decorators For Mall, Interior Decorators For Theatre, Interior Decorators For Auditorium, Interior Decorators For Stadium, Interior Decorators For Airport, Interior Decorators For Railway Station",
  manifest: "https://www.vivekdoshi.com/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Nishtha Architects",
    statusBarStyle: "black-translucent",
  },
  abstract:
    "Welcome to Nishtha Architects, where dreams take shape and sustainable futures are built in the vibrant city of Vadodara. As a leading architecture firm, we specialize in turning your visionary dreams into tangible realities, crafting spaces that seamlessly blend innovation, aesthetics, and sustainability.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WPHeader",
      url: "https://www.vivekdoshi.com/",
      headline:
        "Nishtha - Best Architects in Vadodara | Top Architectural Firm",
      description:
        "Award-winning Best architects in Vadodara, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Vadodara & all over Gujarat. A leading and best interior designer in Vadodara",
    },
    {
      "@type": "WPFooter",
      url: "https://www.vivekdoshi.com/",
      headline:
        "Nishtha - Best Architects in Vadodara | Top Architectural Firm",
      description:
        "Award-winning Best architects in Vadodara, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Vadodara & all over Gujarat. A leading and best interior designer in Vadodara",
      copyrightYear: "2025",
    },
    {
      "@type": "Organization",
      "@id": "https://www.vivekdoshi.com/#schema-publishing-organization",
      url: "https://www.vivekdoshi.com",
      name: "Nishtha Architects",
      description:
        "We are the team of Best architects in Vadodara and cater our top architects services on residential buildings, Interior Designs, Villa, Urban, Institutional and commercial places in Vadodara and all over Gujarat.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-8072701454",
        url: "https://www.vivekdoshi.com/contact/",
        availableLanguage: "Gujarati, English",
        email: "NishthaShah@gmail.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "10, Anjugam Street, Meenakshi Amman Nagar, Alwarthirunagar",
        addressLocality: "Vadodara",
        postalCode: "600087",
        addressCountry: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.vivekdoshi.com/#schema-website",
      url: "https://www.vivekdoshi.com",
      name: "Nishtha Architects",
      encoding: "UTF-8",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.vivekdoshi.com/projects/{search_term_string}/",
        "query-input": "required name=search_term_string",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://www.vivekdoshi.com/#schema-site-logo",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.vivekdoshi.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.vivekdoshi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.vivekdoshi.com/contact",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best architects in Vadodara",
          item: "https://www.vivekdoshi.com",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Top architects in Vadodara",
          item: "https://www.vivekdoshi.com",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.vivekdoshi.com/about/#schema-author",
      name: "Nishtha Architects",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.vivekdoshi.com/#schema-webpage",
      isPartOf: {
        "@id": "https://www.vivekdoshi.com/#schema-website",
      },
      publisher: {
        "@id": "https://www.vivekdoshi.com/#schema-publishing-organization",
      },
      url: "https://www.vivekdoshi.com/",
      inLanguage: "en-US",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-529",
          name: "Home",
          url: "https://www.vivekdoshi.com/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-528",
          name: "",
          url: "https://www.vivekdoshi.com/about/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-527",
          name: "",
          url: "https://www.vivekdoshi.com/projects/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-525",
          name: "",
          url: "https://www.vivekdoshi.com/contact/",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-2394",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/facebook.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" title="facebook bind"width="32px">',
          url: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.vivekdoshi.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-2395",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/youtube.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="youtube bind"width="32px">',
          url: "https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ",
        },
        {
          "@type": "SiteNavigationElement",
          "@id": "https://www.vivekdoshi.com/#schema-nav-element-2396",
          name: '<img src="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/instagram.png?alt=media&token=ca6253bd-41b2-4bb1-9882-bcb9f0d43ce4" target="_blank" title="instagram bind" width="32px">',
          url: "https://www.instagram.com/__nishthashah/",
        },
      ],
    },
    {
      "@type": "Article",
      mainEntityOfPage: {
        "@id": "https://www.vivekdoshi.com/#schema-webpage",
      },
      author: {
        "@id": "https://www.vivekdoshi.com/about/#schema-author",
      },
      publisher: {
        "@id": "https://www.vivekdoshi.com/#schema-publishing-organization",
      },
      dateModified: "2023-11-22T14:29:49",
      datePublished: "2023-09-24T08:32:28",
      headline:
        "Nishtha - Best Architects in Vadodara | Top Architectural Firm",
      description:
        "Award-winning Best architects in Vadodara, we cater our top architect's services on residential buildings, Interior Designs, Villa, Apartment, Institutional and commercial mall, hotel, restaurant in Vadodara & all over Gujarat. A leading and best interior designer in Vadodara",
      name: "Best architects in Vadodara",
      image: {
        "@type": "ImageObject",
        "@id": "https://www.vivekdoshi.com/#schema-article-image",
        url: "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
        height: 153,
        width: 300,
        caption: "design lab for engineering and architecture bind logo",
      },
      thumbnailUrl:
        "https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d",
    },
  ],
};

export default function HomeLayout() {
  return (
    <div className="min-h-screen max-w-screen mt-4">
      <Script
        id="structured-data"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <Head>
        <title>
          Nishtha - Best Architects in Vadodara | Top Architectural Firm
        </title>
        <link rel="canonical" href="https://www.vivekdoshi.com/" />
        <meta
          name="twitter:image:alt"
          property="og:image:alt"
          content="Nishtha Architects Logo"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image"
          sizes="any"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="generator" content="Site Kit by Google 1.104.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vivekdoshi.com/" />
        <meta
          property="og:title"
          content="Nishtha - Best Architects in Vadodara | Top Architectural Firm"
        />
        <meta
          property="og:description"
          content="Welcome to Nishtha Architects, where dreams take shape and sustainable futures are built in the vibrant city of Vadodara. As a leading architecture firm, we specialize in turning your visionary dreams into tangible realities, crafting spaces that seamlessly blend innovation, aesthetics, and sustainability."
        />

        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bind-f87fe.appspot.com/o/logo.png?alt=media&token=5a778e05-4ce8-4b61-ae5d-b6ec3e3e359d"
        />
        <meta
          name="keywords"
          content="best architects in Vadodara, architecture, architects, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design architects near me, cheap price architects, famous architects, interior designs, Architect in Vadodara, Interior designer in Vadodara, Top architects in Vadodara, Best architects in Vadodara, Home design in Vadodara, Shop design in Vadodara, Showroom designer in Vadodara, Residential architects, Commercial architects, best architects in Vadodara, top architects, residential architecture, apartment design, villa design, restaurant architecture, interior design, Modern home designs, Affordable home architects, Office interior designers, Trendy home plans, Innovative building designers, Local architects, Building design experts, Vadodara architecture firms, Creative interior designs, Budget-friendly house architects, Local shop makeover, Renowned showroom renovators, Skilled construction designers, Contemporary building styles, Architecture and design services, Experienced architectural consultants"
        />
        <meta
          name="description"
          content="Welcome to Nishtha Architects, where dreams take shape and sustainable futures are built in the vibrant city of Vadodara. As a leading architecture firm, we specialize in turning your visionary dreams into tangible realities, crafting spaces that seamlessly blend innovation, aesthetics, and sustainability."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Nishtha - Best Architects in Vadodara | Top Architectural Firm"
        />
        <meta
          name="twitter:description"
          content="Welcome to Nishtha Architects, your premier architectural firm in Vadodara. Transforming visions into stunning reality. Explore our innovative and sustainable architectural solutions."
        />
      </Head>
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 bg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P29J8CQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <p
          className="logo-font select-none md:hidden pl-2 md:ml-0 flex-1 text-4xl font-bold"
          aria-label="NISHTHA"
        >
          NISHTHA
        </p>
        <div className="flex-1 md:hidden justify-end float-right">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </div>
      <div className="md:ml-0 ml-5 flex mt-4 justify-between">
        <div className="hidden md:block">
          {" "}
          <MainNav items={marketingConfig.mainNav} />
        </div>

        <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label={item.title}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group relative flex flex-col text-right items-center overflow-hidden dmsans hidden mr-4 text-zinc-300 md:inline-block rounded-md p-2 text-sm font-medium",
                  item.disabled && "cursor-not-allowed opacity-60",
                  "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-px after:bg-orange-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
                  "after:mt-2"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
        </nav>
      </div>

      <IndexPage />
      <Projects />
      <Client />
      <Aboutus />
      <Questions />
      <SiteFooter />
    </div>
  );
}
