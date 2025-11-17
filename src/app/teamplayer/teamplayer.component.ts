import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {

  hoverIndex: number | null = null;


  teamData = [

    {
      headline: 'Nathalie Dorendorf',
      project: 'Join',
      text: 'Marco is reliable, friendly, and highly structured in his work. His code is clean and easy to understand. I fully recommend him as a colleague.',
      link: 'Linked In Profile',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    },
    {
      headline: 'Felix',
      project: 'PokeDex',
      text: 'I haven t collaborated with Marco on a project, but he has helped me several times with my Pokédex work. He’s very organized, easy to talk to, and always willing to support others. His explanations are clear, and his coding skills are strong.',
      link: 'Linked In Profile',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    },
    {
      headline: 'Simeon',
      project: 'Join',
      text: 'Marco is a very organized and team-minded person who contributes positively to any group dynamic. He combines strong interpersonal skills with the ability to write clear, reliable, and maintainable code.',
      link: 'Linked In Profile',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    }
  ];

}
