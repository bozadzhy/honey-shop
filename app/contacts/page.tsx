"use client";

import Container from "../components/Container/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Contacts() {
  return (
    <Container className="py-10 mt-16 h-[calc(100vh-113px)]">
      <h1 className="text-3xl font-bold text-center mb-6">Контакти</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Контактная информация */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Phone className="text-yellow-500" />
            <p className="text-lg">+380 123 456 789</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-yellow-500" />
            <p className="text-lg">info@beefarm.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-yellow-500" />
            <p className="text-lg">Україна, Київ, вул. Медова 10</p>
          </div>
        </div>
        {/* Карта */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9994922010915!2d2.292292315674707!3d48.85837360810439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzEwLjEiTiAywrAxNSc0Ni4wIkU!5e0!3m2!1sen!2s!4v1600000000000"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
