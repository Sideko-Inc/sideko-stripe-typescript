import {
  ClimateOrderMetadata,
  External$ClimateOrderMetadata,
  Schemas$ClimateOrderMetadata,
} from "./climate-order-metadata";
import {
  ClimateProduct,
  External$ClimateProduct,
  Schemas$ClimateProduct,
} from "./climate-product";
import {
  ClimateRemovalsBeneficiary,
  External$ClimateRemovalsBeneficiary,
  Schemas$ClimateRemovalsBeneficiary,
} from "./climate-removals-beneficiary";
import {
  ClimateRemovalsOrderDeliveries,
  External$ClimateRemovalsOrderDeliveries,
  Schemas$ClimateRemovalsOrderDeliveries,
} from "./climate-removals-order-deliveries";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Orders represent your intent to purchase a particular Climate product. When you create an order, the
 * payment is deducted from your merchant balance.
 */
export type ClimateOrder = {
  /**
   * Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit.
   */
  amountFees: number;
  /**
   * Total amount of the carbon removal in the currency's smallest unit.
   */
  amountSubtotal: number;
  /**
   * Total amount of the order including fees in the currency's smallest unit.
   */
  amountTotal: number;
  beneficiary?: ClimateRemovalsBeneficiary | undefined;
  /**
   * Time at which the order was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt?: number | null | undefined;
  /**
   * Reason for the cancellation of this order.
   */
  cancellationReason?:
    | ("expired" | "product_unavailable" | "requested")
    | null
    | undefined;
  /**
   * For delivered orders, a URL to a delivery certificate for the order.
   */
  certificate?: string | null | undefined;
  /**
   * Time at which the order was confirmed. Measured in seconds since the Unix epoch.
   */
  confirmedAt?: number | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order.
   */
  currency: string;
  /**
   * Time at which the order's expected_delivery_year was delayed. Measured in seconds since the Unix epoch.
   */
  delayedAt?: number | null | undefined;
  /**
   * Time at which the order was delivered. Measured in seconds since the Unix epoch.
   */
  deliveredAt?: number | null | undefined;
  /**
   * Details about the delivery of carbon removal for this order.
   */
  deliveryDetails: ClimateRemovalsOrderDeliveries[];
  /**
   * The year this order is expected to be delivered.
   */
  expectedDeliveryYear: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: ClimateOrderMetadata;
  /**
   * Quantity of carbon removal that is included in this order.
   */
  metricTons: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "climate.order";
  /**
   * Unique ID for the Climate `Product` this order is purchasing.
   */
  product: string | ClimateProduct;
  /**
   * Time at which the order's product was substituted for a different product. Measured in seconds since the Unix epoch.
   */
  productSubstitutedAt?: number | null | undefined;
  /**
   * The current status of this order.
   */
  status: "awaiting_funds" | "canceled" | "confirmed" | "delivered" | "open";
};

/**
 * @internal
 * ClimateOrder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateOrder = {
  amount_fees: number;
  amount_subtotal: number;
  amount_total: number;
  beneficiary?: External$ClimateRemovalsBeneficiary | undefined;
  canceled_at?: number | null | undefined;
  cancellation_reason?:
    | ("expired" | "product_unavailable" | "requested")
    | null
    | undefined;
  certificate?: string | null | undefined;
  confirmed_at?: number | null | undefined;
  created: number;
  currency: string;
  delayed_at?: number | null | undefined;
  delivered_at?: number | null | undefined;
  delivery_details: External$ClimateRemovalsOrderDeliveries[];
  expected_delivery_year: number;
  id: string;
  livemode: boolean;
  metadata: External$ClimateOrderMetadata;
  metric_tons: string;
  object: "climate.order";
  product: string | External$ClimateProduct;
  product_substituted_at?: number | null | undefined;
  status: "awaiting_funds" | "canceled" | "confirmed" | "delivered" | "open";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateOrder
 */
const SchemaIn$ClimateOrder: z.ZodType<
  ClimateOrder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_fees: z.number().int(),
    amount_subtotal: z.number().int(),
    amount_total: z.number().int(),
    beneficiary: Schemas$ClimateRemovalsBeneficiary.in.optional(),
    canceled_at: z.number().int().nullable().optional(),
    cancellation_reason: z
      .enum(["expired", "product_unavailable", "requested"])
      .nullable()
      .optional(),
    certificate: z.string().nullable().optional(),
    confirmed_at: z.number().int().nullable().optional(),
    created: z.number().int(),
    currency: z.string(),
    delayed_at: z.number().int().nullable().optional(),
    delivered_at: z.number().int().nullable().optional(),
    delivery_details: z.array(Schemas$ClimateRemovalsOrderDeliveries.in),
    expected_delivery_year: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ClimateOrderMetadata.in,
    metric_tons: z.string(),
    object: z.enum(["climate.order"]),
    product: z.union([z.string(), Schemas$ClimateProduct.in]),
    product_substituted_at: z.number().int().nullable().optional(),
    status: z.enum([
      "awaiting_funds",
      "canceled",
      "confirmed",
      "delivered",
      "open",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_fees: "amountFees",
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
      beneficiary: "beneficiary",
      canceled_at: "canceledAt",
      cancellation_reason: "cancellationReason",
      certificate: "certificate",
      confirmed_at: "confirmedAt",
      created: "created",
      currency: "currency",
      delayed_at: "delayedAt",
      delivered_at: "deliveredAt",
      delivery_details: "deliveryDetails",
      expected_delivery_year: "expectedDeliveryYear",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      metric_tons: "metricTons",
      object: "object",
      product: "product",
      product_substituted_at: "productSubstitutedAt",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateOrder
 */
const SchemaOut$ClimateOrder: z.ZodType<
  External$ClimateOrder, // output type of this zod object
  z.ZodTypeDef,
  ClimateOrder // the object to be transformed
> = z
  .object({
    amountFees: z.number().int(),
    amountSubtotal: z.number().int(),
    amountTotal: z.number().int(),
    beneficiary: Schemas$ClimateRemovalsBeneficiary.out.optional(),
    canceledAt: z.number().int().nullable().optional(),
    cancellationReason: z
      .enum(["expired", "product_unavailable", "requested"])
      .nullable()
      .optional(),
    certificate: z.string().nullable().optional(),
    confirmedAt: z.number().int().nullable().optional(),
    created: z.number().int(),
    currency: z.string(),
    delayedAt: z.number().int().nullable().optional(),
    deliveredAt: z.number().int().nullable().optional(),
    deliveryDetails: z.array(Schemas$ClimateRemovalsOrderDeliveries.out),
    expectedDeliveryYear: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ClimateOrderMetadata.out,
    metricTons: z.string(),
    object: z.enum(["climate.order"]),
    product: z.union([z.string(), Schemas$ClimateProduct.out]),
    productSubstitutedAt: z.number().int().nullable().optional(),
    status: z.enum([
      "awaiting_funds",
      "canceled",
      "confirmed",
      "delivered",
      "open",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountFees: "amount_fees",
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
      beneficiary: "beneficiary",
      canceledAt: "canceled_at",
      cancellationReason: "cancellation_reason",
      certificate: "certificate",
      confirmedAt: "confirmed_at",
      created: "created",
      currency: "currency",
      delayedAt: "delayed_at",
      deliveredAt: "delivered_at",
      deliveryDetails: "delivery_details",
      expectedDeliveryYear: "expected_delivery_year",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      metricTons: "metric_tons",
      object: "object",
      product: "product",
      productSubstitutedAt: "product_substituted_at",
      status: "status",
    });
  });

export const Schemas$ClimateOrder = {
  in: SchemaIn$ClimateOrder,
  out: SchemaOut$ClimateOrder,
};
