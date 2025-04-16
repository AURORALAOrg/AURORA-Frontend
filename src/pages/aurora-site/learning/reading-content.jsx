import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/layout/ui/card';
import { Progress } from '@/components/layout/ui/progress';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';

const ReadingPage = () => {
    const readingTopics = [
        { title: 'Short Stories', progress: 100, unlocked: true },
        { title: 'Articles & Blogs', progress: 85, unlocked: true },
        { title: 'Comprehension Exercises', progress: 70, unlocked: true },
        { title: 'Summarizing Texts', progress: 50, unlocked: true },
        { title: 'Identifying Key Points', progress: 0, unlocked: false },
        { title: 'Advanced Passages', progress: 0, unlocked: false },
        { title: 'Critical Reading Skills', progress: 0, unlocked: false },
        { title: 'Skimming & Scanning', progress: 0, unlocked: false }
    ];

    return (
<div className="min-h-screen bg-transparent text-gray-900 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Reading Practice</h1>
                    <p className="text-gray-400">Boost your reading comprehension with engaging texts and exercises</p>
                </div>

                <div className="grid gap-4 mb-8">
                    {readingTopics.map((topic, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-green-400" />
                                    <span className='text-white'>{topic.title}</span>
                                </CardTitle>
                                {topic.unlocked ? (
                                    <CheckCircle className={`w-5 h-5 ${topic.progress === 100 ? 'text-green-500' : 'text-gray-500'}`} />
                                ) : (
                                    <Lock className="w-5 h-5 text-gray-500" />
                                )}
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4">
                                    <Progress value={topic.progress} className="flex-1 bg-white" />
                                    <span className="text-sm text-gray-400">{topic.progress}%</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className='text-white'>Your Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className='text-white'>Total Progress</span>
                                <span className="text-green-400">56%</span>
                            </div>
                            <Progress value={56} className="w-full bg-white" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ReadingPage;
