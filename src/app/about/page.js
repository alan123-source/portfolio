
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageLayout from "@/components/common/PageLayout/PageLayout";
export default function AboutPage(){

    return (
       
        <PageLayout>
            <PageHeader title="About Me"
                            description="Learn more about my background, interests, technical skills, and career goals."
            />
                <p>
                    I am a Computer Science student passionate about
                    full-stack web development, problem solving,
                    and software engineering.
                </p>
            </PageLayout>
    )
}