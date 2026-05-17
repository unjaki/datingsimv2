"use client";

import { useEffect, useRef } from "react";

export default function PhaserGame() {
    const gameRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gameRef.current) return;

        const initPhaser = async () => {
            const Phaser = (await import("phaser")).default;

            class MainScene extends Phaser.Scene {
                dialogueOpen = false;
                currentRoom = "office1";

                constructor() {
                    super("MainScene");
                }

                preload() {
                    this.load.image(
                        "office",
                        "/assets/backgrounds/office.png"
                    );

                    this.load.image(
                        "office2",
                        "/assets/backgrounds/office2.png"
                    );

                    this.load.image(
                        "jackie",
                        "/assets/characters/MEDCOM/jackie/idle.png"
                    );
                }

                create() {
                    const background = this.add.image(
                        640,
                        360,
                        "office"
                    );

                    const rightArrow = this.add.text(
                        1200,
                        360,
                        ">",
                        {
                            fontSize: "64px",
                            color: "#ffffff"
                        }
                    );

                    rightArrow.setInteractive();

                    rightArrow.on("pointerover", () => {
                        rightArrow.setScale(1.2);
                    });

                    rightArrow.on("pointerout", () => {
                        rightArrow.setScale(1);
                    });

                    rightArrow.on("pointerdown", () => {
                        this.cameras.main.fadeOut(300, 0, 0, 0);

                        this.cameras.main.once(
                            "camerafadeoutcomplete",
                            () => {
                                if (this.currentRoom === "office1") {
                                    background.setTexture("office2");
                                    this.currentRoom = "office2";
                                } else {
                                    background.setTexture("office");
                                    this.currentRoom = "office1";
                                }

                                this.cameras.main.fadeIn(300, 0, 0, 0);
                            }
    );
});

                    const dialogueBox = this.add.rectangle(
                        640,
                        620,
                        1100,
                        160,
                        0x111111,
                        0.9
                    );

                    dialogueBox.setVisible(false);

                    const dialogueText = this.add.text(
                        120,
                        570,
                        "",
                        {
                            fontSize: "28px",
                            color: "#ffffff",
                            wordWrap: {
                                width: 1000
                            }
                        }
                    );

                    dialogueText.setVisible(false);

                    const jackie = this.add.image(
                        900,
                        420,
                        "jackie"
                    );

                    jackie.setInteractive();

                    jackie.on("pointerdown", () => {
                        this.dialogueOpen = true;

                        dialogueBox.setVisible(true);
                        dialogueText.setVisible(true);

                        dialogueText.setText(
                            "Jackie: The archive is restricted."
                        );
                    });

                    jackie.on("pointerover", () => {
                        jackie.setScale(1.03);
                    });

                    jackie.on("pointerout", () => {
                        jackie.setScale(1);
                    });

                    this.input.on(
                        "pointerdown",
                        (pointer: any, objects: any[]) => {
                            if (objects.length > 0) return;

                            if (this.dialogueOpen) {
                                dialogueBox.setVisible(false);
                                dialogueText.setVisible(false);

                                this.dialogueOpen = false;
                            }
                        }
                    );
                }
            }

            const config = {
                type: Phaser.AUTO,
                width: 1280,
                height: 720,
                backgroundColor: "#000000",
                parent: containerRef.current || undefined,
                scene: MainScene
            };

            gameRef.current = new Phaser.Game(config);
        };

        initPhaser();

        return () => {
            gameRef.current?.destroy(true);
            gameRef.current = null;
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-screen h-screen overflow-hidden"
        />
    );
}