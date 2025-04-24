import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderIdDocument = {
  /**
   * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  back?: (string | File) | undefined;
  /**
   * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  front?: (string | File) | undefined;
};

/**
 * @internal
 * IssuingCardholderIdDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderIdDocument = {
  back?: (string | External$File) | undefined;
  front?: (string | External$File) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderIdDocument
 */
const SchemaIn$IssuingCardholderIdDocument: z.ZodType<
  IssuingCardholderIdDocument, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    back: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
    front: z.union([z.string(), z.lazy(() => Schemas$File.in)]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderIdDocument
 */
const SchemaOut$IssuingCardholderIdDocument: z.ZodType<
  External$IssuingCardholderIdDocument, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderIdDocument // the object to be transformed
> = z
  .object({
    back: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
    front: z.union([z.string(), z.lazy(() => Schemas$File.out)]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

export const Schemas$IssuingCardholderIdDocument = {
  in: SchemaIn$IssuingCardholderIdDocument,
  out: SchemaOut$IssuingCardholderIdDocument,
};
