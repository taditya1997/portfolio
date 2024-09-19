"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const questions = [
  { id: 'name', question: "What's your name?", type: 'input' },
  { id: 'email', question: "What's your email address?", type: 'input' },
  { id: 'serviceType', question: "What type of service are you looking for?", type: 'select', options: [
    { value: 'frontend', label: 'Front-end Development' },
    { value: 'website', label: 'Website Development' },
    { value: 'app', label: 'App Development' },
  ]},
  { id: 'projectDescription', question: "Can you describe your project in a few sentences?", type: 'textarea' },
  { id: 'budget', question: "What's your estimated budget for this project?", type: 'input' },
  { id: 'timeline', question: "When do you need this project completed?", type: 'input' },
];

export function ContactForm({ onSubmissionSuccess }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (id, value) => {
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitMessage('Thank you for your inquiry! I\'ll get back to you soon.');
      setFormData({});
      setCurrentStep(0);
      onSubmissionSuccess(); // Notify parent of successful submission
    } catch (error) {
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'input':
        return (
          <Input
            id={question.id}
            name={question.id}
            value={formData[question.id] || ''}
            onChange={(e) => handleChange(question.id, e.target.value)}
            required
            className="w-full bg-gray-800 text-white"
          />
        );
      case 'select':
        return (
          <Select onValueChange={(value) => handleChange(question.id, value)} value={formData[question.id] || ''}>
            <SelectTrigger className="w-full bg-gray-800 text-white">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {question.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'textarea':
        return (
          <Textarea
            id={question.id}
            name={question.id}
            value={formData[question.id] || ''}
            onChange={(e) => handleChange(question.id, e.target.value)}
            required
            className="w-full bg-gray-800 text-white"
            rows={4}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Let's Talk About Your Project</CardTitle>
        <CardDescription className="text-sm text-gray-400">
          Step {currentStep + 1} of {questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <label className="block text-sm font-medium mb-2">{questions[currentStep].question}</label>
              {renderQuestion(questions[currentStep])}
            </form>
          </motion.div>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrev} disabled={currentStep === 0} variant="outline">
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          {currentStep === questions.length - 1 ? (isSubmitting ? 'Submitting...' : 'Submit') : 'Next'}
        </Button>
      </CardFooter>
      {submitMessage && (
        <CardFooter>
          <p className="text-sm text-center w-full">{submitMessage}</p>
        </CardFooter>
      )}
    </Card>
  );
}
