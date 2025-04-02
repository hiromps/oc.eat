"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Store, ShoppingBag, Camera, PenTool } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "店舗PR",
      description: "SNSを活用した効果的な店舗PRを行います。写真撮影から投稿まで一貫して対応可能です。",
      icon: <Store className="w-12 h-12" />,
      gradient: "from-orange-400 to-pink-600",
    },
    {
      title: "商品紹介",
      description: "新商品やメニューの魅力を最大限に引き出す写真・動画コンテンツを制作します。",
      icon: <ShoppingBag className="w-12 h-12" />,
      gradient: "from-blue-400 to-purple-600",
    },
    {
      title: "写真撮影",
      description: "料理写真の撮影サービスを提供します。SNS映えする高品質な写真をお届けします。",
      icon: <Camera className="w-12 h-12" />,
      gradient: "from-green-400 to-teal-600",
    },
    {
      title: "メニュー制作",
      description: "写真付きメニューの制作をサポート。お客様の目を引くデザインを提案します。",
      icon: <PenTool className="w-12 h-12" />,
      gradient: "from-red-400 to-orange-600",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-400 font-semibold mb-2 block">Our Services</span>
          <h2 className="text-4xl font-bold mb-4 text-white">サービス</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            飲食店様向けに各種PRサービスを提供しています。
            お客様のニーズに合わせた最適なプランをご提案いたします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-gray-800/50 backdrop-blur-lg border-gray-700 overflow-hidden relative">
                <CardContent className="p-6">
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Services;