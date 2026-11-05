import type { CaseSectionKind, CaseStudy } from '../data/caseStudies';

export const defaultCaseSections: CaseSectionKind[] = ['problem', 'research', 'flow', 'decisions', 'experience', 'evaluation', 'reflection'];

/** One image, one viewer position, regardless of where it appears in the story. */
export function getCaseStudyImages(project: CaseStudy) {
  const images = [
    { url: project.heroImage, caption: project.subtitle, captionAr: project.subtitleAr },
    ...(project.secondaryHeroImage ? [{ url: project.secondaryHeroImage, caption: 'Roshetety patient app', captionAr: 'تطبيق روشتتي للمرضى' }] : []),
    ...(project.designDecisions?.flatMap(decision => decision.screenshots) ?? []),
    ...(project.taskSequences?.flatMap(sequence => sequence.screens) ?? []),
    ...project.gallery,
    ...(project.processArtifacts?.flatMap(group => group.images) ?? []),
  ];
  return Array.from(new Map(images.map(image => [image.url, image])).values());
}
