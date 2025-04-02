"use client";

import { motion } from "framer-motion";
import { Instagram, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const SocialPlatforms = () => {
  const platforms = [
    {
      name: "Instagram",
      id: "oc.eat",
      url: "https://www.instagram.com/oc.eat/",
      icon: <Instagram className="w-8 h-8" />,
      color: "from-purple-500 via-pink-500 to-orange-500",
    },
    {
      name: "TikTok",
      id: "oc.eat",
      url: "https://www.tiktok.com/@oc.eat",
      icon: <span className="text-2xl">🎵</span>,
      color: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      name: "Lemon8",
      id: "oc.eat",
      url: "https://www.lemon8.com/@oc.eat",
      icon: <span className="text-2xl">🍋</span>,
      color: "from-yellow-400 via-orange-400 to-red-400",
    },
    {
      name: "食べログ",
      id: "ossykun1320",
      url: "https://tabelog.com/rvwr/ossykun1320/",
      icon: <span className="text-2xl">🍴</span>,
      color: "from-red-500 via-red-400 to-orange-400",
    },
    {
      name: "Google口コミ",
      id: "Local Guide",
      url: "#",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-400 via-indigo-400 to-purple-400",
    },
  ];

  return (
    <section id="social" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
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
          <span className="text-orange-400 font-semibold mb-2 block">Follow Us</span>
          <h2 className="text-4xl font-bold mb-4 text-white">SNSプラットフォーム</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            各SNSプラットフォームで最新の情報を発信しています。
            フォローして関西の美味しいグルメ情報をチェックしてください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transform transition-all duration-300 hover:scale-105"
              >
                <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-700/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${platform.color}`}>
                        <div className="text-white">{platform.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">{platform.name}</h3>
                        <p className="text-gray-400">@{platform.id}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
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

export default SocialPlatforms;