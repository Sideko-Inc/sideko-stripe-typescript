import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeAlipay
 */
export type SourceTypeAlipay = {
  dataString?: string | null | undefined;
  nativeUrl?: string | null | undefined;
  statementDescriptor?: string | null | undefined;
};

/**
 * @internal
 * SourceTypeAlipay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeAlipay = {
  data_string?: string | null | undefined;
  native_url?: string | null | undefined;
  statement_descriptor?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeAlipay
 */
const SchemaIn$SourceTypeAlipay: z.ZodType<
  SourceTypeAlipay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data_string: z.string().nullable().optional(),
    native_url: z.string().nullable().optional(),
    statement_descriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data_string: "dataString",
      native_url: "nativeUrl",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeAlipay
 */
const SchemaOut$SourceTypeAlipay: z.ZodType<
  External$SourceTypeAlipay, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeAlipay // the object to be transformed
> = z
  .object({
    dataString: z.string().nullable().optional(),
    nativeUrl: z.string().nullable().optional(),
    statementDescriptor: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dataString: "data_string",
      nativeUrl: "native_url",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$SourceTypeAlipay = {
  in: SchemaIn$SourceTypeAlipay,
  out: SchemaOut$SourceTypeAlipay,
};
