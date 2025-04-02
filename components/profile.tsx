"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Utensils, MapPin, Heart } from "lucide-react";

const Profile = () => {
  return (
    <section id="profile" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">プロフィール</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/profile.png"
              alt="おっしー"
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">おっしー</h3>
            <p className="text-gray-600 mb-8">
              関西を中心に美味しいお店を紹介している食のインフルエンサーです。
              日々の食べ歩きで見つけた素敵なお店の情報を、SNSを通じて発信しています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Utensils className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold">300+</h4>
                  <p className="text-sm text-gray-500">店舗訪問</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold">関西圏</h4>
                  <p className="text-sm text-gray-500">活動エリア</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold">3万+</h4>
                  <p className="text-sm text-gray-500">総フォロワー</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;