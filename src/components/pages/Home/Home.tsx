import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Play,
  Users,
  Clock,
  TrendingUp,
  Stethoscope,
  FileText,
  BarChart3,
} from "lucide-react";
import VideosSection from "./components/VideosSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            {/* Headlines */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Unlock the Secrets to{" "}
              <span className="text-blue-700">Pharmaceutical Sales</span>{" "}
              <span className="text-emerald-600">Success</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Access expert-led video content tailored for medical
              representatives to close more deals, boost revenue, and excel in
              pharmaceutical sales.
            </p>

            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-7 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Today
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 relative">
            <div className="bg-white rounded-2xl h-[300px] shadow-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Expert Training
                  </h3>
                  <p className="text-sm text-gray-600">
                    Advanced Sales Techniques
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">
                    Pharmacy-specific strategies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">
                    Real-world case studies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">
                    24/7 access to content
                  </span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <Stethoscope className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </header>

      <VideosSection />
      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel in Pharmaceutical Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training designed specifically for medical
            representatives at every career stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">
                Exclusive Video Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                In-depth, expert-curated videos by top pharmaceutical sales
                leaders covering advanced sales strategies for the healthcare
                industry.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-700">
                Pharmacy-Specific Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Actionable, real-world strategies to engage healthcare
                professionals, build trust, and drive prescription sales.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">
                Tailored for All Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Content designed for both new and experienced medical
                representatives, from onboarding to advanced deal-closing
                techniques.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-700">
                On-Demand Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Flexible, 24/7 access to videos, allowing users to learn at
                their own pace, anywhere, anytime.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">
                Regularly Updated Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Stay ahead with fresh, industry-relevant strategies reflecting
                the latest trends in pharmaceutical sales.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-700">
                Expert-Led Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Learn from industry veterans with proven track records in
                pharmaceutical sales and healthcare relationship building.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-800 to-emerald-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Begin Your Journey to Pharmaceutical Sales Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Begin your journey to pharmaceutical sales excellence and earn
            higher incentives. Subscribe today to unlock consistent, high-impact
            selling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Subscribe Now for $49/Month
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-blue-600 hover:bg-blue-800 text-white border-blue-400 hover:border-blue-600 px-4 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book 1-on-1 Consultation - $99/Hour
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Section / Footer */}
      <footer className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Secure Subscription
              </h3>
              <Badge
                variant="secondary"
                className="bg-emerald-100 text-emerald-800 px-4 py-2"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Secure Checkout
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Subscription Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-blue-800">
                    Monthly Subscription - $49
                  </CardTitle>
                  <CardDescription className="text-center">
                    Full access to all video content and resources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        className="my-2"
                        id="firstName"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input className="my-2" id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="my-2"
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="card">Card Number</Label>
                    <Input
                      className="my-2"
                      id="card"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry</Label>
                      <Input className="my-2" id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input className="my-2" id="cvc" placeholder="123" />
                    </div>
                  </div>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg font-semibold">
                    Start Subscription - $49/Month
                  </Button>
                </CardContent>
              </Card>

              {/* Consultation Booking */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-blue-800">
                    1-on-1 Strategy Consultation
                  </CardTitle>
                  <CardDescription className="text-center">
                    Personalized sales coaching session - $99/hour
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>Personalized sales strategy review</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>Territory optimization guidance</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>Deal-closing technique coaching</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>Q&A with industry experts</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 text-lg font-semibold mt-8">
                    Book Consultation - $99/Hour
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                <strong>
                  Trusted by pharmaceutical professionals worldwide
                </strong>
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                <span>🔒 SSL Secured</span>
                <span>💳 Secure Payment</span>
                <span>🛡️ Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
