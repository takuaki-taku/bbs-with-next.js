import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  request: NextRequest,
  { params }: { params: { bbsId: string } }
): Promise<NextResponse> {
  const bbsId = params.bbsId;

  try {
    const bbsDetailData = await prisma.post.findUnique({
      where: {
        id: parseInt(bbsId, 10),
      },
    });

    if (!bbsDetailData) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(bbsDetailData);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}