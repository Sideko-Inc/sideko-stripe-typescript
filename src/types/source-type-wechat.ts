import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeWechat
 */
export type SourceTypeWechat = {
  prepayId?: string | undefined;
  qrCodeUrl?: string | null | undefined;
  statementDescriptor?: string | undefined;
};

/**
 * @internal
 * SourceTypeWechat without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeWechat = {
  prepay_id?: string | undefined;
  qr_code_url?: string | null | undefined;
  statement_descriptor?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeWechat
 */
const SchemaIn$SourceTypeWechat: z.ZodType<
  SourceTypeWechat, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    prepay_id: z.string().optional(),
    qr_code_url: z.string().nullable().optional(),
    statement_descriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      prepay_id: "prepayId",
      qr_code_url: "qrCodeUrl",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeWechat
 */
const SchemaOut$SourceTypeWechat: z.ZodType<
  External$SourceTypeWechat, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeWechat // the object to be transformed
> = z
  .object({
    prepayId: z.string().optional(),
    qrCodeUrl: z.string().nullable().optional(),
    statementDescriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      prepayId: "prepay_id",
      qrCodeUrl: "qr_code_url",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeWechat = {
  in: SchemaIn$SourceTypeWechat,
  out: SchemaOut$SourceTypeWechat,
};
